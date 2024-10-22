import React from "react";

export function Card({ className = "", children, ...props }) {
  return (
    <div
      className={`rounded-lg border bg-white shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ className = "", children, ...props }) {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}

export default Card;

/*import React from "react"

export function Card({ className = "", children, ...props }) {
  return (
    
      {children}
    
  )
}

export function CardContent({ className = "", children, ...props }) {
  return (
    
      {children}
    
  )
} */