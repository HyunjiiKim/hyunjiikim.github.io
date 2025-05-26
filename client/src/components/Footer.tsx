export default function Footer() {
    return (
        <footer className="bg-primary-2 text-primary-3 py-6 mt-10">
            <div className="max-w-[1000px] mx-auto text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Hyunji Kim. All rights reserved.</p>
                <p className="text-xs mt-2">Made with ❤️ using React and TypeScript</p>
            </div>
        </footer>
    );
}