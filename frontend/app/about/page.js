"use client";
import ThemeToggle from "../components/ThemeToggle";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 sm:p-3 rounded-xl shadow-lg">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Tumor Detection</h1>
                <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">AI-Powered Tumor Detection</p>
              </div>
            </div>
            <nav className="flex space-x-2 sm:space-x-4">
              <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base transition-colors">
                Home
              </Link>
              <Link href="/stats" className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base transition-colors">
                Statistics
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12 bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Breast Cancer Detection
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Understanding how our AI-powered tool helps in early breast cancer detection through advanced machine learning
          </p>
        </div>

        {/* What is Breast Cancer */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">What is Breast Cancer?</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-4">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                  Breast cancer is a disease in which cells in the breast grow out of control. There are different kinds of breast cancer.
                  The kind of breast cancer depends on which cells in the breast turn into cancer.
                </p>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  Breast cancer can begin in different parts of the breast, like the ducts or the lobes. Early detection and diagnosis
                  are crucial for successful treatment.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
                <h3 className="font-semibold text-blue-900 mb-3 text-lg">Key Facts</h3>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Most common cancer in women worldwide
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Early detection increases survival rates to 99%
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Regular screening is crucial
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 border border-gray-100">
            <div className="flex items-center mb-8">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">How This Tool Works</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 p-2 rounded-lg mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-blue-900 text-lg">Data Collection</h3>
                </div>
                <p className="text-blue-800 text-sm sm:text-base leading-relaxed">
                  Uses the Wisconsin Breast Cancer Dataset, containing measurements from digitized images of fine needle aspirates
                  of breast masses. Each sample has 30 features computed from the images.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 p-2 rounded-lg mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-green-900 text-lg">Machine Learning</h3>
                </div>
                <p className="text-green-800 text-sm sm:text-base leading-relaxed">
                  Trained on 569 samples using advanced algorithms to classify tumors as benign or malignant based on
                  cellular characteristics and morphological features.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-500 p-2 rounded-lg mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-purple-900 text-lg">Feature Analysis</h3>
                </div>
                <p className="text-purple-800 text-sm sm:text-base leading-relaxed">
                  Analyzes all 30 features including radius, texture, perimeter, area, smoothness, compactness,
                  concavity, symmetry, and fractal dimension measurements.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-500 p-2 rounded-lg mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-orange-900 text-lg">Real-time Prediction</h3>
                </div>
                <p className="text-orange-800 text-sm sm:text-base leading-relaxed">
                  Provides instant classification with confidence scores, helping healthcare professionals make
                  informed decisions about further diagnostic procedures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Used */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="flex items-center mb-8">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Complete Feature Analysis</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 sm:p-6 rounded-xl border border-indigo-200">
                <h3 className="font-bold text-indigo-900 mb-3 text-lg">Mean Measurements</h3>
                <ul className="space-y-2 text-indigo-800 text-sm">
                  {["Radius", "Texture", "Perimeter", "Area", "Smoothness", "Compactness", "Concavity", "Concave Points", "Symmetry", "Fractal Dimension"].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-indigo-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-4 sm:p-6 rounded-xl border border-teal-200">
                <h3 className="font-bold text-teal-900 mb-3 text-lg">Standard Error</h3>
                <ul className="space-y-2 text-teal-800 text-sm">
                  {["Radius SE", "Texture SE", "Perimeter SE", "Area SE", "Smoothness SE", "Compactness SE", "Concavity SE", "Concave Points SE", "Symmetry SE", "Fractal Dimension SE"].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-teal-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 sm:p-6 rounded-xl border border-pink-200">
                <h3 className="font-bold text-pink-900 mb-3 text-lg">Worst Measurements</h3>
                <ul className="space-y-2 text-pink-800 text-sm">
                  {["Radius Worst", "Texture Worst", "Perimeter Worst", "Area Worst", "Smoothness Worst", "Compactness Worst", "Concavity Worst", "Concave Points Worst", "Symmetry Worst", "Fractal Dimension Worst"].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-pink-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Dataset Information */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 border border-gray-100">
            <div className="flex items-center mb-8">
              <div className="bg-teal-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Dataset Information</h2>
            </div>
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 sm:p-8 rounded-xl border border-teal-200">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                <div className="text-center bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl sm:text-4xl font-bold text-teal-600 mb-2">569</div>
                  <div className="text-sm sm:text-base text-teal-700 font-medium">Total Samples</div>
                </div>
                <div className="text-center bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">357</div>
                  <div className="text-sm sm:text-base text-green-700 font-medium">Benign Cases</div>
                  <div className="text-xs text-green-500">(62.7%)</div>
                </div>
                <div className="text-center bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">212</div>
                  <div className="text-sm sm:text-base text-red-700 font-medium">Malignant Cases</div>
                  <div className="text-xs text-red-500">(37.3%)</div>
                </div>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg">
                <h3 className="font-semibold text-teal-900 mb-3 text-lg">Wisconsin Breast Cancer Dataset</h3>
                <p className="text-teal-800 text-sm sm:text-base leading-relaxed mb-4">
                  The Wisconsin Breast Cancer Dataset is a well-known benchmark dataset in machine learning research.
                  It contains features computed from digitized images of fine needle aspirates of breast masses.
                  Each sample is labeled as benign (B) or malignant (M) by medical professionals.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center text-teal-700">
                    <svg className="w-4 h-4 mr-2 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Source: University of Wisconsin Hospitals
                  </div>
                  <div className="flex items-center text-teal-700">
                    <svg className="w-4 h-4 mr-2 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Features: 30 computed from images
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Disclaimer */}
        <section className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-6 sm:p-8 lg:p-10">
          <div className="flex items-start mb-6">
            <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-red-900 mb-2">Important Medical Disclaimer</h2>
              <p className="text-red-700 text-sm sm:text-base mb-4">
                This AI tool is designed for educational and research purposes only
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-red-200">
            <div className="text-red-800 space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <p className="text-sm sm:text-base leading-relaxed">
                  <strong>This tool is NOT a substitute for professional medical advice, diagnosis, or treatment.</strong>
                  The predictions provided are for educational purposes only and should not be used as the sole basis for medical decisions.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <p className="text-sm sm:text-base leading-relaxed">
                  Always consult with qualified healthcare professionals for proper diagnosis and treatment.
                  Early detection through regular screening and professional medical examination is crucial for breast cancer.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <p className="text-sm sm:text-base leading-relaxed">
                  If you have concerns about breast cancer, please contact your healthcare provider immediately.
                  Regular check-ups and mammograms are essential for early detection.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}