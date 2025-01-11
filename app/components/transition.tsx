import { motion } from "framer-motion";

export default function Transition({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <motion.div
            className="transition-container w-screen"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3}}
        >
            {children}
        </motion.div>
    );
}
