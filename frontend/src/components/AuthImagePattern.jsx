import React from "react";
import { MessageSquare } from "lucide-react";

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex flex-col justify-center items-center p-12 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="max-w-md text-center space-y-6">
        <div className="flex justify-center">
          <div className="size-24 rounded-2xl bg-primary flex items-center justify-center">
            <MessageSquare className="size-12 text-white" />
          </div>
        </div>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-base-content/70 text-lg">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
