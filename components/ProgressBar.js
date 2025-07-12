// File: components/ProgressBar.js
export default function ProgressBar({ value, label }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span>{Math.round(value)}%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-4 dark:bg-gray-700">
        <div
          className="bg-indigo-600 h-4 rounded-full dark:bg-indigo-400"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}