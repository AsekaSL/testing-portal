import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AppContext } from "../../context/AppContext";

const QrLoading = () => {
  // ✅ Fixed: removed TypeScript generic syntax
  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState("Verifying attendance...");
  const navigate = useNavigate();
  const {id} = useParams()
  const {backendUrl} = useContext(AppContext)

  const markAttendance = async () => {
    try {

      axios.defaults.withCredentials = true
      
      const {data} = await axios.post(backendUrl + `/attendance/mark/${id}`)

      if(data.success) {
        setStatus("approved")
        setMessage("Attendance marked successfully!");

        setTimeout(() => {
          navigate("/student");
        }, 3000);

      }else{
        toast.error(data.message)
        setStatus("declined");
        setMessage(`${data.message}. Please try again.`);
        setTimeout(() => {
          navigate("/"); 
        }, 3000);
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    
    markAttendance()
    
  }, [navigate]);

  const getStatusIcon = () => {
    switch (status) {
      case "loading":
        return <i className="fas fa-spinner fa-spin text-4xl text-blue-500"></i>;
      case "approved":
        return <i className="fas fa-check-circle text-4xl text-green-500"></i>;
      case "declined":
        return <i className="fas fa-times-circle text-4xl text-red-500"></i>;
      default:
        return null;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case "loading":
        return "text-blue-600";
      case "approved":
        return "text-green-600";
      case "declined":
        return "text-red-600";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 shadow-md rounded w-full max-w-md text-center">
        {/* Status Icon */}
        <div className="flex justify-center mb-6">{getStatusIcon()}</div>

        {/* Title */}
        <h1 className={`text-2xl font-bold mb-4 ${getStatusColor()}`}>
          {status === "loading"
            ? "Verifying Attendance"
            : status === "approved"
            ? "Success!"
            : "Failed"}
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-6">{message}</p>

        {/* Loading Bar for loading state */}
        {status === "loading" && (
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div
              className="bg-blue-500 h-2 rounded-full animate-pulse"
              style={{ width: "60%" }}
            ></div>
          </div>
        )}

        {/* Additional Info */}
        <div className="text-sm text-gray-500">
          {status === "loading" && "Please wait while we process your scan."}
          {status === "approved" && "Your attendance has been recorded."}
          {status === "declined" &&
            "Please contact your professor if you believe this is an error."}
        </div>

        {/* Auto-redirect notice */}
        {status !== "loading" && (
          <div className="mt-4 text-xs text-gray-400">
            Redirecting to dashboard in a few seconds...
          </div>
        )}
      </div>
    </div>
  );
};

export default QrLoading;