"use client";
import React, { useState, useEffect } from 'react';

const Toast = ({ status, message, onClose }) => {
    const bgColor = status === 'success' ? 'bg-green-500' : 'bg-red-500';

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000); // Auto-dismiss after 3 seconds

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`${bgColor} py-2 px-4 rounded-md text-white text-center flex gap-4 shadow-lg`}>
            <p>{message}</p>
            <span className="cursor-pointer font-bold" onClick={onClose}><sup>X</sup></span>
        </div>
    );
};

export default Toast;