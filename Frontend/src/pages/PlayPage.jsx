import React, { useState, useEffect } from "react";
import Layout from "../components/common/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, Bot, RotateCcw, ArrowLeftRight, Gamepad2, Trophy, X, Circle } from "lucide-react";
import { siteData } from "../data/content";

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const winner = calculateWinner(board);

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    const handleClick = (i) => {
        if (winner || board[i]) return;
        const newBoard = board.slice();
        newBoard[i] = isXNext ? "X" : "O";
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
    };

    const isDraw = !winner && board.every(square => square !== null);

    return (
        <div className="flex flex-col items-center w-full">
            <div className="mb-6 flex justify-between w-full items-center">
                <div className="flex items-center gap-2">
                    <Trophy size={16} className="text-yellow-500" />
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                        {winner ? `Winner: ${winner}` : isDraw ? "It is a Draw!" : `Next: ${isXNext ? "X" : "O"}`}
                    </span>
                </div>
                <button 
                    onClick={resetGame}
                    className="p-2 hover:bg-white/5 rounded-lg transition-colors text-zinc-400"
                >
                    <RotateCcw size={16} />
                </button>
            </div>
            
            <div className="grid grid-cols-3 gap-2 w-full max-w-[280px] aspect-square">
                {board.map((square, i) => (
                    <button
                        key={i}
                        onClick={() => handleClick(i)}
                        className={`aspect-square rounded-xl flex items-center justify-center text-3xl font-bold transition-all
                            ${!square ? "bg-white/5 hover:bg-white/10 active:scale-95" : "bg-brand/10"}
                            ${square === "X" ? "text-brand" : "text-emerald-400"}
                        `}
                    >
                        {square === "X" && <X size={32} strokeWidth={3} />}
                        {square === "O" && <Circle size={28} strokeWidth={3} />}
                    </button>
                ))}
            </div>
        </div>
    );
};

const PlayPage = () => {
    const [messages, setMessages] = useState([
        { role: "bot", text: `Hi! I am Aryan Assistant. Ask me anything about his work, skills, or experience!` }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const handleSend = () => {
        if (!input.trim() || isTyping) return;
        
        const userMsg = input.trim();
        setMessages(prev => [...prev, { role: "user", text: userMsg }]);
        setInput("");
        setIsTyping(true);

        setTimeout(() => {
            let response = "That is interesting! Aryan has experience in Full-Stack development and is an AI enthusiast.";
            
            const lowMsg = userMsg.toLowerCase();
            if (lowMsg.includes("experience") || lowMsg.includes("internship")) {
                response = "Aryan is currently interning at Appzeto as a Software Developer and has previously worked at ABS Softech and IMC.";
            } else if (lowMsg.includes("education") || lowMsg.includes("college")) {
                response = "He is a 3rd-year CSE student specialized in Data Science at IPS Academy, RGPV University.";
            } else if (lowMsg.includes("skills") || lowMsg.includes("tech") || lowMsg.includes("stack")) {
                response = "Aryan specializes in the MERN stack (MongoDB, Express, React, Node.js) and is also skilled in Data Science and AI.";
            } else if (lowMsg.includes("hi") || lowMsg.includes("hello")) {
                response = `Hello! How can I help you today? I can tell you about Aryan projects, skills, or background.`;
            }

            setMessages(prev => [...prev, { role: "bot", text: response }]);
            setIsTyping(false);
        }, 1000);
    };

    return (
        <Layout>
            <div className="pt-24 pb-12 overflow-hidden min-h-screen">
                <div className="section-container relative">
                    <div className="absolute top-20 -left-20 w-80 h-80 bg-brand/10 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-20 -right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="mb-8 text-center md:text-left">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold mb-4"
                        >
                            Playground<span className="text-brand">.</span>
                        </motion.h1>
                        <p className="text-zinc-400 max-w-xl">
                            Experimenting with AI and small games. Talk to my digital twin or play a quick game.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-5 flex flex-col h-[600px]">
                            <div className="glass-card flex-1 flex flex-col p-0 overflow-hidden bg-surface/30 border-white/5 rounded-3xl">
                                <div className="p-5 border-b border-white/5 bg-brand/5 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center border border-brand/30">
                                            <Bot className="text-brand" size={20} />
                                        </div>
                                        <div>
                                            <h2 className="text-sm font-bold">AI Assistant</h2>
                                            <div className="flex items-center gap-1.5">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                                <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">Online</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
                                    {messages.map((m, i) => (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            key={i}
                                            className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${m.role === "user"
                                                ? "bg-brand text-white ml-auto rounded-tr-none"
                                                : "bg-white/5 text-zinc-300 mr-auto rounded-tl-none border border-white/10"
                                                }`}
                                        >
                                            {m.text}
                                        </motion.div>
                                    ))}
                                    {isTyping && (
                                        <div className="bg-white/5 text-zinc-300 mr-auto rounded-2xl rounded-tl-none border border-white/10 p-4">
                                            <div className="flex gap-1.5">
                                                <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce" />
                                                <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce" />
                                                <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce" />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="p-4 border-t border-white/5 bg-surface/50">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            onKeyPress={(e) => e.key === "Enter" && handleSend()}
                                            placeholder="Ask something..."
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 pr-12 text-sm focus:border-brand/40 focus:outline-none transition-all placeholder:text-zinc-600"
                                        />
                                        <button
                                            onClick={handleSend}
                                            className="absolute right-2 top-2 p-2.5 bg-brand text-white rounded-xl hover:scale-105 active:scale-95 transition-all"
                                        >
                                            <Send size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="glass-card bg-surface/30 border-white/5 p-8 rounded-3xl flex flex-col items-center">
                                <div className="flex items-center gap-2 mb-8 self-start">
                                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                                        <Gamepad2 className="text-emerald-500" size={18} />
                                    </div>
                                    <h3 className="text-lg font-bold">Tic Tac Toe</h3>
                                </div>
                                <TicTacToe />
                            </div>

                            <div className="glass-card bg-surface/30 border-white/5 p-8 rounded-3xl relative overflow-hidden group">
                                <div className="flex items-center gap-2 mb-8">
                                    <div className="w-8 h-8 rounded-lg bg-brand/20 flex items-center justify-center border border-brand/30">
                                        <span className="text-brand font-bold text-xs">C</span>
                                    </div>
                                    <h3 className="text-lg font-bold">Chess AI</h3>
                                </div>
                                
                                <div className="space-y-6">
                                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                        <div className="flex justify-between items-center mb-3 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                                            <span>Opponent</span>
                                            <span>ELO 2400</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center">
                                                <Bot size={20} className="text-zinc-600" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                                                    <div className="h-full bg-brand w-[85%]" />
                                                </div>
                                                <span className="text-[10px] text-zinc-600 mt-1 block">Difficulty: Grandmaster</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <button className="w-full py-4 bg-white/5 border border-white/5 text-zinc-400 rounded-2xl font-bold flex items-center justify-center gap-2 cursor-not-allowed">
                                        Upcoming Engine
                                    </button>
                                </div>
                                
                                <div className="absolute inset-0 bg-surface/80 backdrop-blur-[4px] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <span className="px-5 py-2.5 bg-brand text-white rounded-full text-xs font-bold shadow-xl shadow-brand/20">
                                        Under Development
                                    </span>
                                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-4 font-bold">Coming Soon</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default PlayPage;