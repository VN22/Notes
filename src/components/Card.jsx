import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.2 }}
        dragElastic={0.2}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 25 }}
        className="relative flex-shrink-0 w-60 h-[15rem] rounded-[45px] bg-zinc-900/90 text-white px-5 py-8 overflow-hidden"
      >
        <FaFileAlt />
        <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
        <div className="footer absolute bottom-0 w-full left-0">
          <div className="flex items-center justify-between  px-8 py-3 mb-3">
            <h5>{data.fileSize}</h5>
            <span className="w-5 h-5 bg-zinc-700 rounded-full flex items-center justify-center">
              {data.close ? (
                <IoClose size="0.7em" color="#fff" />
              ) : (
                <FaDownload size="0.7em" color="#fff" />
              )}
            </span>
          </div>
          {data.tag.isOpen && (
            <div
              className={`tag w-full py-4 ${
                data.tag.tagColor === "green" ? "bg-green-600" : "bg-blue-600"
              } flex items-center justify-center`}
            >
              <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Card;
