import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AddPermissionModal = ({ onAddPermission }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [permission, setPermission] = useState({
    permissionName: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPermission({
      ...permission,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!permission.permissionName || !permission.description) {
      alert("Please fill in all fields.");
      return;
    }

    const existingPermissions =
      JSON.parse(sessionStorage.getItem("permissions")) || [];

    const updatedPermissions = [
      ...existingPermissions,
      {
        permission: permission.permissionName,
        description: permission.description,
      },
    ];

    sessionStorage.setItem("permissions", JSON.stringify(updatedPermissions));

    onAddPermission({
      permission: permission.permissionName,
      description: permission.description,
    });

    setPermission({ permissionName: "", description: "" });
    setModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="flex items-center justify-center px-2 py-1 text-base pl-1 tracking-wide text-white transition-colors duration-200 transform bg-[#43505d] rounded-lg dark:bg-[#001F3F] dark:hover:bg-[#001F3F] dark:focus:bg-[#001F3F]hover:bg-[#14375a] focus:outline-none focus:bg-[#001F3F] focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
        <span>Add Permission</span>
      </button>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-50 overflow-y-auto"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-end justify-center min-h-screen px-4 text-center md:items-center sm:block sm:p-0">
              <motion.div
                className="inline-block w-full max-w-xl p-8 my-20 overflow-hidden text-left transform border-gray-200 text-white bg-[#86929e] rounded-lg shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-between space-x-4">
                  <h1 className="text-xl font-medium ">
                    Add Permission
                  </h1>
                  <button
                    onClick={() => setModalOpen(false)}
                    className="text-gray-600 focus:outline-none hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="mt-5">
                  <div>
                    <label
                      htmlFor="permissionName"
                      className="block text-sm  capitalize dark:text-gray-500"
                    >
                      Permission
                    </label>
                    <input
                      id="permissionName"
                      name="permissionName"
                      value={permission.permissionName}
                      onChange={handleInputChange}
                      placeholder="Enter permission..."
                      type="text"
                      className="block w-full px-3 py-2 mt-2 text-gray-600 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-4">
                    <label
                      htmlFor="description"
                      className="block text-sm  capitalize dark:text-gray-500"
                    >
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={permission.description}
                      onChange={handleInputChange}
                      placeholder="Enter permission description..."
                      className="block w-full px-3 py-2 mt-2 text-gray-600 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
                      rows="3"
                    />
                  </div>

                  <div className="flex justify-end mt-6">
                    <button
                      type="submit"
                      className="px-3 py-2 text-sm tracking-wide bg-[#001F3F] rounded-md hover:bg-[#1e4974] focus:outline-none focus:bg-[#14375a] focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
                    >
                      Add Permission
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AddPermissionModal;
