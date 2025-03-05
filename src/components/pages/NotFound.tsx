"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-dark text-white text-center position-relative">
      {/* Animated 404 Text */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="display-1 fw-bold text-warning"
      >
        404
      </motion.h1>

      {/* Message */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="lead text-secondary w-50"
      >
        Oops! The page you are looking for **does not exist** or has been moved.
      </motion.p>

      {/* Home Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        className="mt-4"
      >
        <Link href="/" className="btn btn-warning btn-lg fw-bold shadow">
          Go Back Home
        </Link>
      </motion.div>

      {/* Floating Decorations for a Modern Look */}
      <div className="position-absolute top-0 start-0 translate-middle bg-warning rounded-circle opacity-25" style={{ width: "80px", height: "80px" }}></div>
      <div className="position-absolute bottom-0 end-0 translate-middle bg-secondary rounded-circle opacity-50" style={{ width: "100px", height: "100px" }}></div>
      <div className="position-absolute bottom-50 start-50 translate-middle bg-danger rounded-circle opacity-25" style={{ width: "50px", height: "50px" }}></div>
    </div>
  );
};

export default NotFound;
