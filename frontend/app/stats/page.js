"use client";
import { useState, useEffect } from "react";
import ThemeToggle from "../components/ThemeToggle";
import Link from "next/link";

export default function Stats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading dataset statistics
    // In a real app, this would fetch from an API
    setTimeout(() => {
      setStats({
        totalSamples: 569,
        benignCount: 357,
        malignantCount: 212,
        benignPercentage: 62.7,
        malignantPercentage: 37.3,
        features: [
          { name: "Radius Mean", benign: { mean: 12.15, std: 1.78 }, malignant: { mean: 17.46, std: 3.20 } },
          { name: "Texture Mean", benign: { mean: 17.91, std: 3.96 }, malignant: { mean: 21.60, std: 3.78 } },
          { name: "Perimeter Mean", benign: { mean: 78.08, std: 11.81 }, malignant: { mean: 115.37, std: 21.98 } },
          { name: "Area Mean", benign: { mean: 462.79, std: 134.29 }, malignant: { mean: 978.38, std: 367.94 } },
          { name: "Smoothness Mean", benign: { mean: 0.0925, std: 0.0134 }, malignant: { mean: 0.1029, std: 0.0140 } },
          { name: "Compactness Mean", benign: { mean: 0.0801, std: 0.0337 }, malignant: { mean: 0.1452, std: 0.0536 } },
          { name: "Concavity Mean", benign: { mean: 0.0461, std: 0.0434 }, malignant: { mean: 0.1607, std: 0.0749 } },
          { name: "Concave Points Mean", benign: { mean: 0.0254, std: 0.0180 }, malignant: { mean: 0.0879, std: 0.0340 } },
          { name: "Symmetry Mean", benign: { mean: 0.1742, std: 0.0246 }, malignant: { mean: 0.1929, std: 0.0275 } },
          { name: "Fractal Dimension Mean", benign: { mean: 0.0628, std: 0.0069 }, malignant: { mean: 0.0627, std: 0.0070 } },
          { name: "Radius SE", benign: { mean: 0.284, std: 0.112 }, malignant: { mean: 0.609, std: 0.345 } },
          { name: "Texture SE", benign: { mean: 1.22, std: 0.46 }, malignant: { mean: 1.21, std: 0.48 } },
          { name: "Perimeter SE", benign: { mean: 2.00, std: 0.77 }, malignant: { mean: 4.32, std: 2.02 } },
          { name: "Area SE", benign: { mean: 21.14, std: 8.99 }, malignant: { mean: 72.67, std: 61.21 } },
          { name: "Smoothness SE", benign: { mean: 0.0072, std: 0.0030 }, malignant: { mean: 0.0068, std: 0.0028 } },
          { name: "Compactness SE", benign: { mean: 0.0214, std: 0.0168 }, malignant: { mean: 0.0323, std: 0.0205 } },
          { name: "Concavity SE", benign: { mean: 0.0259, std: 0.0277 }, malignant: { mean: 0.0418, std: 0.0270 } },
          { name: "Concave Points SE", benign: { mean: 0.0107, std: 0.0059 }, malignant: { mean: 0.0151, std: 0.0070 } },
          { name: "Symmetry SE", benign: { mean: 0.0205, std: 0.0083 }, malignant: { mean: 0.0203, std: 0.0081 } },
          { name: "Fractal Dimension SE", benign: { mean: 0.0037, std: 0.0020 }, malignant: { mean: 0.0043, std: 0.0026 } },
          { name: "Radius Worst", benign: { mean: 13.38, std: 1.98 }, malignant: { mean: 21.13, std: 4.28 } },
          { name: "Texture Worst", benign: { mean: 23.52, std: 5.44 }, malignant: { mean: 29.32, std: 5.49 } },
          { name: "Perimeter Worst", benign: { mean: 87.01, std: 13.47 }, malignant: { mean: 141.37, std: 29.46 } },
          { name: "Area Worst", benign: { mean: 558.90, std: 163.60 }, malignant: { mean: 1422.29, std: 597.92 } },
          { name: "Smoothness Worst", benign: { mean: 0.1247, std: 0.0206 }, malignant: { mean: 0.1448, std: 0.0219 } },
          { name: "Compactness Worst", benign: { mean: 0.1826, std: 0.0925 }, malignant: { mean: 0.3745, std: 0.1601 } },
          { name: "Concavity Worst", benign: { mean: 0.1662, std: 0.1409 }, malignant: { mean: 0.4506, std: 0.1817 } },
          { name: "Concave Points Worst", benign: { mean: 0.0801, std: 0.0528 }, malignant: { mean: 0.1822, std: 0.0461 } },
          { name: "Symmetry Worst", benign: { mean: 0.2685, std: 0.0449 }, malignant: { mean: 0.3232, std: 0.0741 } },
          { name: "Fractal Dimension Worst", benign: { mean: 0.0790, std: 0.0139 }, malignant: { mean: 0.0915, std: 0.0213 } }
        ]
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading statistics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Breast Cancer Detection</h1>
                <p className="text-sm text-gray-600">Dataset Statistics & Analysis</p>
              </div>
            </div>
            <nav className="flex space-x-4">
              <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-blue-600 hover:text-blue-800 font-medium">
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{stats.totalSamples}</div>
            <div className="text-gray-600">Total Samples</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{stats.benignCount}</div>
            <div className="text-gray-600">Benign Cases</div>
            <div className="text-sm text-green-500">({stats.benignPercentage}%)</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">{stats.malignantCount}</div>
            <div className="text-gray-600">Malignant Cases</div>
            <div className="text-sm text-red-500">({stats.malignantPercentage}%)</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">30</div>
            <div className="text-gray-600">Features</div>
            <div className="text-sm text-purple-500">(14 used in model)</div>
          </div>
        </div>

        {/* Feature Comparison */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Feature Comparison: Benign vs Malignant</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-center py-3 px-4 font-semibold text-green-700">Benign Mean</th>
                  <th className="text-center py-3 px-4 font-semibold text-green-700">Benign Std</th>
                  <th className="text-center py-3 px-4 font-semibold text-red-700">Malignant Mean</th>
                  <th className="text-center py-3 px-4 font-semibold text-red-700">Malignant Std</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">Difference</th>
                </tr>
              </thead>
              <tbody>
                {stats.features.map((feature, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-900">{feature.name}</td>
                    <td className="py-3 px-4 text-center text-green-700 font-mono">
                      {feature.benign.mean.toFixed(2)}
                    </td>
                    <td className="py-3 px-4 text-center text-green-600 font-mono">
                      {feature.benign.std.toFixed(2)}
                    </td>
                    <td className="py-3 px-4 text-center text-red-700 font-mono">
                      {feature.malignant.mean.toFixed(2)}
                    </td>
                    <td className="py-3 px-4 text-center text-red-600 font-mono">
                      {feature.malignant.std.toFixed(2)}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className={`font-mono ${
                        Math.abs(feature.malignant.mean - feature.benign.mean) > feature.benign.std
                          ? 'text-red-600 font-bold'
                          : 'text-gray-600'
                      }`}>
                        {(feature.malignant.mean - feature.benign.mean).toFixed(2)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Distribution Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Class Distribution */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Class Distribution</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-green-700 font-medium">Benign</span>
                <div className="flex-1 mx-4">
                  <div className="bg-gray-200 rounded-full h-4">
                    <div
                      className="bg-green-500 h-4 rounded-full transition-all duration-500"
                      style={{ width: `${stats.benignPercentage}%` }}
                    ></div>
                  </div>
                </div>
                <span className="text-green-700 font-bold">{stats.benignPercentage}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-red-700 font-medium">Malignant</span>
                <div className="flex-1 mx-4">
                  <div className="bg-gray-200 rounded-full h-4">
                    <div
                      className="bg-red-500 h-4 rounded-full transition-all duration-500"
                      style={{ width: `${stats.malignantPercentage}%` }}
                    ></div>
                  </div>
                </div>
                <span className="text-red-700 font-bold">{stats.malignantPercentage}%</span>
              </div>
            </div>
          </div>

          {/* Key Insights */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Insights</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-gray-700 text-sm">
                    <strong>Larger tumors</strong> are more likely to be malignant (higher mean radius, perimeter, area)
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-gray-700 text-sm">
                    <strong>Irregular shapes</strong> (higher concavity, concave points) indicate malignancy
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-purple-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <div>
                  <p className="text-gray-700 text-sm">
                    <strong>Texture variation</strong> is higher in malignant tumors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Model Performance Note */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-blue-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h4 className="text-lg font-medium text-blue-900 mb-2">Model Performance</h4>
              <p className="text-blue-800">
                The machine learning model used in this application has been trained on this dataset and typically achieves
                high accuracy (95%+) in classifying breast tumors. However, this is a demonstration tool and should not replace
                professional medical diagnosis.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}