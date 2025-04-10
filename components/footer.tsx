'use client';

import { Coffee, Instagram, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#754b35] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and social */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Coffee className="h-8 w-8" />
              <span className="text-xl font-bold">A Matear</span>
            </div>
            <p className="text-sm opacity-80">
              Tradición tucumana en cada sorbo
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/amatear"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Horarios */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Horarios de atención</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Lunes a Viernes: 9:00 - 20:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Sábados: 10:00 - 14:00</span>
              </div>
            </div>
          </div>

          {/* Ubicación */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Ubicación</h3>
            <div className="flex items-start space-x-2">
              <MapPin className="h-5 w-5 mt-1" />
              <div>
                <p>San Martín 123</p>
                <p>San Miguel de Tucumán</p>
                <p>Tucumán, Argentina</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} A Matear. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}