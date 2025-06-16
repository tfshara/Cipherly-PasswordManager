import React, { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
    const [form, setform] = useState({ site: "", username: "", password: "" });
    const [savedPasswords, setSavedPasswords] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const ref = useRef();
    useEffect(() => {
        const stored = localStorage.getItem("passwords");
        if (stored) {
            setSavedPasswords(JSON.parse(stored));
        }
    }, []);

    const showPassword = () => {
        const input = document.getElementById("passwordInput")
        if (ref.current.src.includes("eyeoff.png")) {
            ref.current.src = "eyeon.png";
            input.type = "text"
        } else {
            ref.current.src = "eyeoff.png";
            input.type = "password"
        }
    };
    const savePassword = () => {
        let stored = localStorage.getItem("passwords");
        let updatedList = stored ? JSON.parse(stored) : [];
        updatedList.push(form);
        localStorage.setItem("passwords", JSON.stringify(updatedList));
        setform({ site: "", username: "", password: "" });
        setSavedPasswords(updatedList); // ✅ Now no confusion
    };


    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    };

    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            toast.success("Copied to clipboard!", {
                position: "bottom-right",
                autoClose: 1500,
                hideProgressBar: true,
                theme: "dark",
                icon: "✅",
                style: {
                    border: '1px solid #00f2ff',
                    padding: '8px 12px',
                    color: '#00f2ff',
                    backgroundColor: '#0f172a'
                }
            });
        } catch (err) {
            toast.error("Failed to copy!");
        }
    };
    const handleDelete = (indexToDelete) => {
        let c = confirm("do you really want to delete this?")
        if (c) {
            const updated = savedPasswords.filter((_, index) => index !== indexToDelete);
            setSavedPasswords(updated)
            localStorage.setItem("passwords", JSON.stringify(updated))
        }
        toast.success("Deleted Successfully", {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: true,
            theme: "dark",
            icon: "✅",
            style: {
                border: '1px solid #00f2ff',
                padding: '8px 12px',
                color: '#00f2ff',
                backgroundColor: '#0f172a'
            }
        });
    }
    const handleEdit = () => {
        const updated = [...savedPasswords];
        updated[editIndex] = form;                     // replace with updated form
        setSavedPasswords(updated);
        localStorage.setItem("passwords", JSON.stringify(updated));
        setform({ site: "", username: "", password: "" });
        setEditIndex(null);                            // reset edit mode
    };




    return (
        <>
            <div className="relative min-h-screen w-full">
                <div className="absolute inset-0 -z-10 min-h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_65%,#1e2f59_100%)]"></div>

                <div className="container mx-auto mt-5 ">
                    {/* <h1
                        className="inline-block font-cyber font-bold tracking-wide text-xl bg-gradient-to-r from-white via-cyan-200 to-[#00f2ff] bg-clip-text text-transparent ml-[450px]"
                        style={{ fontFamily: 'Orbitron' }}
                    >
                        Cipherly
                    </h1>
                    <p style={{ fontFamily: 'Fira ' }} className='ml-[430px] tracking-wide text-white text-sm'>Lock it with Cipherly.</p> */}
                    <div className="text-center">
                        <h1
                            className="inline-block font-cyber font-bold tracking-wide text-xl bg-gradient-to-r from-white via-cyan-200 to-[#00f2ff] bg-clip-text text-transparent"
                            style={{ fontFamily: 'Orbitron' }}
                        >
                            Cipherly
                        </h1>
                        <p style={{ fontFamily: 'Fira' }} className='tracking-wide text-white text-sm'>
                            Lock it with Cipherly.
                        </p>
                    </div>

                    
                    <div className="flex flex-col gap-4 p-6 w-full max-w-xl mx-auto">
                        <input
                            name='site'
                            onChange={handlechange}
                            value={form.site}
                            type="text"
                            placeholder="Enter website URL"
                            className="w-full bg-gray-800 text-white placeholder-gray-400 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-200"
                        />

                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                name='username'
                                onChange={handlechange}
                                value={form.username}
                                type="text"
                                placeholder="Enter Username"
                                className="w-full sm:flex-1 bg-gray-800 text-white placeholder-gray-400 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-200"
                            />
                            <div className="relative w-full sm:flex-1">
                                <input
                                    id="passwordInput"
                                    name='password'
                                    onChange={handlechange}
                                    value={form.password}
                                    type="password"
                                    placeholder="Enter Password"
                                    className="w-full bg-gray-800 text-white placeholder-gray-400 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-200"
                                />
                                <span
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                    onClick={showPassword}
                                >
                                    <img ref={ref} src="eyeoff.png" alt="toggle" className="w-5 h-5" />
                                </span>
                            </div>
                        </div>


                        <div className="flex justify-center">
                            <button onClick={() => {
                                if (editIndex !== null) {
                                    handleEdit();
                                } else {
                                    savePassword();
                                }
                            }} className="inline-flex items-center gap-2 px-3 py-2 bg-black rounded-md hover:shadow-[0_0_10px_#00f2ff] transition duration-200">
                                <lord-icon
                                    src="https://cdn.lordicon.com/efxgwrkc.json"
                                    trigger="hover"
                                    colors="primary:#e4e4e4"
                                    style={{ width: "24px", height: "24px" }}
                                ></lord-icon>
                                <span className="text-white">Save</span>
                            </button>
                        </div>
                    </div>
                    <div className="passwords  w-full max-w-3xl mx-auto px-4">
                        <h2 className="text-xl text-white mb-4 font-bold tracking-wide" style={{ fontFamily: 'Orbitron' }}>
                            Your Passwords
                        </h2>
                        {savedPasswords.length === 0 ? (
                            <div className="text-white text-center py-6 bg-white/5 rounded-xl shadow-md border border-cyan-500">
                                <p className="text-sm tracking-wider">🔒 No passwords to show. Add one to get started.</p>
                            </div>
                        ) : (

                            <div className="overflow-x-auto rounded-xl border border-cyan-500 shadow-[0_0_20px_#00f2ff80]scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent">
                                <table className=" min-w-[700px] w-full text-white text-sm backdrop-blur bg-white/5">
                                    <thead>
                                        <tr className="border-b border-cyan-500" style={{ fontFamily: 'Fira ' }}>
                                            <th className="py-3 px-4 text-left tracking-wider">Website</th>
                                            <th className="py-3 px-4 text-left tracking-wider">Username</th>
                                            <th className="py-3 px-4 text-left tracking-wider">Password</th>
                                            <th className="py-3 px-4 text-left tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {savedPasswords.map((item, index) => (
                                            <tr key={index} className="hover:bg-cyan-900 transition-all duration-150 border-b border-gray-700">
                                                <td className="py-2 px-4 flex items-center relative">
                                                    <a
                                                        href={item.site.startsWith('http') ? item.site : `https://${item.site}`}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-white hover:text-cyan-400 transition duration-200"
                                                    >
                                                        {item.site}
                                                    </a>
                                                    <img
                                                        onClick={() => copyToClipboard(item.site)}
                                                        className="w-4 h-4 ml-2 sm:ml-4 cursor-pointer"
                                                        src="copy.png"
                                                        alt="Copy icon"
                                                    />

                                                </td>

                                                <td className="py-2 px-4 relative">
                                                    <div className="flex items-center">
                                                        <span>{item.username}</span>
                                                        <img
                                                            onClick={() => copyToClipboard(item.username)}
                                                            className="w-4 h-4 ml-2 sm:ml-4 cursor-pointer"
                                                            src="copy.png"
                                                            alt="Copy icon"
                                                        />

                                                    </div>
                                                </td>
                                                <td className="py-2 px-4 relative">
                                                    <div className="flex items-center">
                                                        <span>{"*".repeat(item.password.length)}</span>
                                                        <img
                                                            onClick={() => copyToClipboard(item.password)}
                                                            className="w-4 h-4 ml-2 sm:ml-4 cursor-pointer"
                                                            src="copy.png"
                                                            alt="Copy icon"
                                                        />

                                                    </div>
                                                </td>
                                                <td className="py-2 px-4 relative">
                                                    <div className="flex items-center gap-5">
                                                        <span><lord-icon
                                                            className="cursor-pointer"
                                                            onClick={() => handleDelete(index)}
                                                            src="https://cdn.lordicon.com/xyfswyxf.json"
                                                            trigger="hover"
                                                            colors="primary:#e4e4e4"
                                                            style={{ width: "20px", height: "20px", }}>
                                                        </lord-icon></span>
                                                        <span>
                                                            <img onClick={() => {
                                                                setform(savedPasswords[index]);
                                                                setEditIndex(index);
                                                            }
                                                            } className='w-[20px] h-[20px] cursor-pointer' src="edit (2).png" alt="" />
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                              )}
                    </div>

                </div>
            </div>
            <ToastContainer />

        </>
    );
};

export default Manager;
