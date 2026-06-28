
# Terraform configuration for creating a VPC, subnet, internet gateway, and route table in AWS.

resource aws_vpc tf-vpc {

    cidr_block = "10.0.0.0/16"
    instance_tenancy = "default"

    tags = {
        Name = "vpc"
    }
}

resource aws_subnet tf-public-subnet {

    vpc_id = aws_vpc.tf-vpc.id
    cidr_block = "10.0.0.0/24"
    map_public_ip_on_launch = true

    tags = {
        Name = "public-subnet"
    }

}

resource aws_internet_gateway tf-igw {

    vpc_id = aws_vpc.tf-vpc.id

    tags = {
        Name = "igw"
    }

}

resource aws_route_table tf-public-route-table {

    vpc_id = aws_vpc.tf-vpc.id

    route {
        cidr_block = "0.0.0.0/0"
        gateway_id = aws_internet_gateway.tf-igw.id
    }

    tags = {
        Name = "public-route-table"
    }

}

resource aws_route_table_association tf-public-route-table-association {

    subnet_id = aws_subnet.tf-public-subnet.id
    route_table_id = aws_route_table.tf-public-route-table.id

}


# Terraform configuration for creating an EC2 instance in AWS.

resource aws_key_pair tf-key {
    key_name   = "tf-ml-key"
    public_key = file("tf-ml-key.pub")
}

resource aws_security_group tf-sg {

    name        = "tumer-dectection-sg"
    description = "Allow SSH and HTTP traffic"
    vpc_id      = aws_vpc.tf-vpc.id

    ingress {
        from_port   = 22
        to_port     = 22
        protocol    = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }

    ingress {
        from_port   = 5000
        to_port     = 5000
        protocol    = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }

    ingress {
        from_port   = 3000
        to_port     = 3000
        protocol    = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }

    egress {
        from_port   = 0
        to_port     = 0
        protocol    = "-1"
        cidr_blocks = ["0.0.0.0/0"]
    }

}

resource aws_instance tf-server {

    ami = "ami-04df7d76c1b804451"
    instance_type = "c7i-flex.large"
    subnet_id = aws_subnet.tf-public-subnet.id
    vpc_security_group_ids = [aws_security_group.tf-sg.id]
    key_name = aws_key_pair.tf-key.key_name

    root_block_device {
        volume_size = 8
        volume_type = "gp3"
    }

    tags = {
        Name = "server"
    }

}

# Output the public IP address of the EC2 instance

output "instance_public_ip" {
    value = aws_instance.tf-server.public_ip
}