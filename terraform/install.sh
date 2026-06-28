
# Installation commands for the required packages and dependencies
sudo apt update
sudo apt install python3-venv -y
sudo apt-get install npm -y
sudo npm install -g pm2
sudo apt update
sudo apt install -y gnupg curl

# Add MongoDB GPG key and repository
curl -fsSL https://pgp.mongodb.com/server-8.0.asc | \
sudo gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg \
--dearmor

# Add MongoDB repository to the sources list
echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu noble/mongodb-org/8.0 multiverse" | \
sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list

# Update package lists and install MongoDB
sudo apt update
sudo apt install -y mongodb-org
sudo systemctl start mongod
sudo systemctl enable mongod

# Clone the project repository
git clone https://github.com/DattaRahegaonkar/Tumer-Detection-ML-Project.git


# Install backend and frontend dependencies
cd Tumer-Detection-ML-Project/backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
pm2 start "python app.py"

cd ../frontend
cp .env.local.example .env.local
npm install
npm run build
pm2 start npm --name "next-app" -- start