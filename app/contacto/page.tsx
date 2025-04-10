'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Ingresá un email válido'),
  phone: z.string().min(8, 'Ingresá un teléfono válido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('¡Mensaje enviado! Te contactaremos pronto.');
      form.reset();
    } catch (error) {
      toast.error('Hubo un error al enviar el mensaje. Por favor, intentá nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contacto</h1>
          <p className="text-lg text-gray-600">
            ¿Tenés alguna consulta? Estamos para ayudarte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Información de Contacto
              </h2>
              <div className="space-y-6">
                <Card className="p-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-[#754b35] mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Dirección</h3>
                      <p className="text-gray-600">San Martín 123</p>
                      <p className="text-gray-600">San Miguel de Tucumán</p>
                      <p className="text-gray-600">Tucumán, Argentina</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-[#754b35] mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Horarios</h3>
                      <p className="text-gray-600">Lunes a Viernes: 9:00 - 20:00</p>
                      <p className="text-gray-600">Sábados: 10:00 - 14:00</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-[#754b35] mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Teléfono</h3>
                      <p className="text-gray-600">+54 381 512-3456</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-[#754b35] mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <p className="text-gray-600">contacto@amatear.com</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Envianos un mensaje
              </h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu nombre" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="tu@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Teléfono</FormLabel>
                        <FormControl>
                          <Input placeholder="+54 381 XXX-XXXX" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensaje</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="¿En qué podemos ayudarte?"
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-[#754b35] hover:bg-[#5f3c2a]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                  </Button>
                </form>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}