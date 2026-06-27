"use client";
import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [features, setFeatures] = useState({});
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [confidence, setConfidence] = useState(null);
  const [expectedFeatures, setExpectedFeatures] = useState([]);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [saving, setSaving] = useState(false);
  const [savedMsg, setSavedMsg] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientId, setPatientId] = useState("");
  const [patientNotes, setPatientNotes] = useState("");

  const featureDescriptions = {
    radius_mean: "Mean of distances from center to points on the perimeter",
    texture_mean: "Standard deviation of gray-scale values",
    perimeter_mean: "Mean size of the core tumor",
    area_mean: "Mean area of the tumor",
    smoothness_mean: "Mean of local variation in radius lengths",
    compactness_mean: "Mean of perimeter²/area - 1.0",
    concavity_mean: "Mean of severity of concave portions of the contour",
    concave_points_mean: "Mean number of concave portions of the contour",
    symmetry_mean: "Mean symmetry of the tumor",
    fractal_dimension_mean: "Mean coastline approximation - 1",
    radius_se: "Standard error of radius measurements",
    texture_se: "Standard error of texture measurements",
    perimeter_se: "Standard error of perimeter measurements",
    area_se: "Standard error of area measurements",
    smoothness_se: "Standard error of smoothness measurements",
    compactness_se: "Standard error of compactness measurements",
    concavity_se: "Standard error of concavity measurements",
    concave_points_se: "Standard error of concave points measurements",
    symmetry_se: "Standard error of symmetry measurements",
    fractal_dimension_se: "Standard error of fractal dimension measurements",
    radius_worst: "Worst (largest) radius measurement",
    texture_worst: "Worst (most irregular) texture measurement",
    perimeter_worst: "Worst (largest) perimeter measurement",
    area_worst: "Worst (largest) area measurement",
    smoothness_worst: "Worst (most irregular) smoothness measurement",
    compactness_worst: "Worst (most irregular) compactness measurement",
    concavity_worst: "Worst (most irregular) concavity measurement",
    concave_points_worst: "Worst (most) concave points measurement",
    symmetry_worst: "Worst (most irregular) symmetry measurement",
    fractal_dimension_worst: "Worst (most irregular) fractal dimension measurement",
  };

  useEffect(() => {
    if (status === "unauthenticated") router.push("/home");
  }, [status, router]);

  useEffect(() => {
    if (status !== "authenticated") return;
    fetch("http://127.0.0.1:5000/features")
      .then((res) => res.json())
      .then((data) => {
        setExpectedFeatures(data.features);
        const init = {};
        data.features.forEach((f) => (init[f] = ""));
        setFeatures(init);
      })
      .catch(() => {});
  }, [status]);

  const fetchHistory = async () => {
    const res = await fetch("/api/results");
    const data = await res.json();
    if (data.results) setHistory(data.results);
  };

  const handleChange = (feature, value) => {
    setFeatures((prev) => ({ ...prev, [feature]: value }));
    setError("");
  };

  const handleSubmit = async () => {
    if (!patientName.trim() || !patientId.trim()) {
      setError("Please fill in Patient Name and Patient ID before analyzing.");
      return;
    }
    const emptyFields = expectedFeatures.filter((f) => !features[f]);
    if (emptyFields.length > 0) {
      setError(`Please fill in all fields: ${emptyFields.join(", ")}`);
      return;
    }
    setLoading(true);
    setError("");
    setSavedMsg("");
    try {
      const featureValues = expectedFeatures.map((f) => parseFloat(features[f]));
      const res = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ features: featureValues }),
      });
      const data = await res.json();
      if (data.error) {
        setError(data.error);
        setResult("");
        setConfidence(null);
      } else {
        setResult(data.result);
        setConfidence(data.confidence);
        // Auto-save result to MongoDB
        setSaving(true);
        await fetch("/api/results", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            patientName,
            patientId,
            patientNotes,
            prediction: data.prediction,
            result: data.result,
            confidence: data.confidence,
            features: featureValues,
          }),
        });
        setSaving(false);
        setSavedMsg("✅ Result saved to your history");
        if (showHistory) fetchHistory();
      }
    } catch {
      setError("❌ Backend not running or connection failed!");
      setResult("");
      setConfidence(null);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    const reset = {};
    expectedFeatures.forEach((f) => (reset[f] = ""));
    setFeatures(reset);
    setResult("");
    setConfidence(null);
    setError("");
    setSavedMsg("");
    setPatientName("");
    setPatientId("");
    setPatientNotes("");
  };

  const handleShowHistory = () => {
    if (!showHistory) fetchHistory();
    setShowHistory(!showHistory);
  };

  if (status === "loading" || status === "unauthenticated") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

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
                <h1 className="text-xl sm:text-3xl font-bold text-gray-900">Tumor Detection</h1>
                <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">AI-Powered Tumor Detection</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <nav className="hidden sm:flex space-x-4">
                <Link href="/about" className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">About</Link>
                <Link href="/stats" className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">Statistics</Link>
              </nav>
              {/* User info */}
              <div className="flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-lg px-3 py-2">
                <div className="w-7 h-7 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {session.user.name?.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm font-medium text-gray-700 hidden sm:block">{session.user.name}</span>
              </div>
              <button
                onClick={handleShowHistory}
                className="text-sm text-purple-600 hover:text-purple-800 font-medium border border-purple-200 rounded-lg px-3 py-2 hover:bg-purple-50 transition-all"
              >
                History
              </button>
              <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="text-sm text-red-600 hover:text-red-800 font-medium border border-red-200 rounded-lg px-3 py-2 hover:bg-red-50 transition-all"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* History Panel */}
        {showHistory && (
          <div className="mb-8 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Your Recent Results — <span className="text-purple-600 ml-1">{session.user.name}</span>
            </h2>
            {history.length === 0 ? (
              <p className="text-gray-500 text-sm">No results yet. Run an analysis to see your history.</p>
            ) : (
              <div className="space-y-3">
                {history.map((item) => (
                  <div
                    key={item._id}
                    className={`flex items-center justify-between p-4 rounded-lg border ${
                      item.result.includes("Malignant")
                        ? "bg-red-50 border-red-200"
                        : "bg-green-50 border-green-200"
                    }`}
                  >
                    <div>
                      <p className={`font-semibold text-sm ${item.result.includes("Malignant") ? "text-red-800" : "text-green-800"}`}>
                        {item.result}
                      </p>
                      <p className="text-xs text-gray-700 mt-0.5">
                        Patient: <span className="font-medium">{item.patientName}</span> · ID: {item.patientId}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {new Date(item.createdAt).toLocaleString()} · Confidence: {item.confidence}%
                      </p>
                      {item.patientNotes && <p className="text-xs text-gray-400 italic mt-0.5">{item.patientNotes}</p>}
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                      item.result.includes("Malignant") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
                    }`}>
                      {item.result.includes("Malignant") ? "Malignant" : "Benign"}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Tumor Feature Analysis
            </h2>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            {/* Patient Info */}
            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg space-y-3">
              <h3 className="text-sm font-semibold text-blue-800">Patient Information</h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Patient Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    placeholder="e.g. John Doe"
                    value={patientName}
                    onChange={(e) => { setPatientName(e.target.value); setError(""); }}
                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Patient ID <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    placeholder="e.g. PT-00123"
                    value={patientId}
                    onChange={(e) => { setPatientId(e.target.value); setError(""); }}
                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Notes (optional)</label>
                <textarea
                  rows={2}
                  placeholder="Any relevant patient notes..."
                  value={patientNotes}
                  onChange={(e) => setPatientNotes(e.target.value)}
                  className="w-full p-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>
            </div>

            <div className="space-y-4 max-h-96 overflow-y-auto">
              {expectedFeatures.map((feature) => (
                <div key={feature} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 capitalize">
                    {feature.replace(/_/g, " ")}
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    placeholder={`Enter ${feature.replace(/_/g, " ")}`}
                    value={features[feature] || ""}
                    onChange={(e) => handleChange(feature, e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <p className="text-xs text-gray-500">{featureDescriptions[feature]}</p>
                </div>
              ))}
            </div>

            <div className="flex space-x-4 mt-6">
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 px-6 rounded-lg font-medium transition-all flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyzing...
                  </>
                ) : (
                  "Analyze Tumor"
                )}
              </button>
              <button
                onClick={resetForm}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Results Panel */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Analysis Results
            </h2>

            {result ? (
              <div className={`p-6 rounded-lg border-2 ${result.includes("Malignant") ? "bg-red-50 border-red-200" : "bg-green-50 border-green-200"}`}>
                {/* Patient + Analyzed by */}
                <div className="mb-4 pb-4 border-b border-gray-200 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs text-gray-500">Patient</p>
                      <p className="text-sm font-semibold text-gray-800">{patientName}</p>
                      <p className="text-xs text-gray-500">ID: {patientId}</p>
                      {patientNotes && <p className="text-xs text-gray-400 mt-1 italic">{patientNotes}</p>}
                    </div>
                    <div className="text-right">
                      {saving && <span className="text-xs text-blue-500 animate-pulse">Saving...</span>}
                      {savedMsg && !saving && <span className="text-xs text-green-600">{savedMsg}</span>}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-7 h-7 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">
                      {session.user.name?.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Analyzed by</p>
                      <p className="text-sm font-semibold text-gray-800">{session.user.name} <span className="text-gray-400 font-normal">({session.user.email})</span></p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${result.includes("Malignant") ? "bg-red-100" : "bg-green-100"}`}>
                    {result.includes("Malignant") ? (
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                  <div className="ml-4">
                    <h3 className={`text-lg font-semibold ${result.includes("Malignant") ? "text-red-800" : "text-green-800"}`}>
                      {result}
                    </h3>
                    {confidence && (
                      <p className="text-sm text-gray-600">Confidence: {confidence}%</p>
                    )}
                  </div>
                </div>

                <div className="text-sm text-gray-700">
                  {result.includes("Malignant") ? (
                    <p className="text-red-700">⚠️ This analysis suggests malignant characteristics. Please consult with a healthcare professional immediately.</p>
                  ) : (
                    <p className="text-green-700">✅ This analysis suggests benign characteristics. Regular medical check-ups are still recommended.</p>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-gray-500">Enter tumor features and click &quot;Analyze Tumor&quot; to get results</p>
                <p className="text-xs text-gray-400 mt-2">Results will be saved to your account automatically</p>
              </div>
            )}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-yellow-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <div>
              <h4 className="text-sm font-medium text-yellow-800 mb-1">Medical Disclaimer</h4>
              <p className="text-sm text-yellow-700">
                This tool is for educational and research purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
