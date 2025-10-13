import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-black/10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-600 flex items-center justify-center gap-2">
         Yugananthan Palani
        </p>
        <p className="text-sm text-gray-500 mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
