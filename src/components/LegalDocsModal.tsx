import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Scale } from 'lucide-react';

interface LegalDocsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab: 'privacy' | 'terms';
}

export default function LegalDocsModal({ isOpen, onClose, initialTab }: LegalDocsModalProps) {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>(initialTab);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in" id="legal-docs-modal">
      {/* Backdrop Close Click */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] z-10 text-slate-300">
        
        {/* Header Tabs */}
        <div className="flex border-b border-slate-800 bg-slate-950 p-1 items-center justify-between shrink-0">
          <div className="flex space-x-1">
            <button
              onClick={() => setActiveTab('privacy')}
              className={`flex items-center space-x-2 px-4 py-3 text-xs font-semibold tracking-wider uppercase transition-all rounded-t-lg border-b-2 cursor-pointer ${
                activeTab === 'privacy'
                  ? 'border-orange-500 text-white bg-slate-900'
                  : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-900/50'
              }`}
            >
              <ShieldCheck className="h-4 w-4 text-orange-500" />
              <span>Aviso de Privacidad</span>
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`flex items-center space-x-2 px-4 py-3 text-xs font-semibold tracking-wider uppercase transition-all rounded-t-lg border-b-2 cursor-pointer ${
                activeTab === 'terms'
                  ? 'border-orange-500 text-white bg-slate-900'
                  : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-900/50'
              }`}
            >
              <Scale className="h-4 w-4 text-orange-500" />
              <span>Términos y Condiciones</span>
            </button>
          </div>
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="p-2 mr-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors focus:outline-none cursor-pointer"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 font-sans text-sm leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
          {activeTab === 'privacy' ? (
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-white border-b border-slate-800 pb-3">
                <ShieldCheck className="h-6 w-6 text-orange-500" />
                <h3 className="font-display text-xl tracking-wide font-bold">AVISO DE PRIVACIDAD UNIFORMES PRE</h3>
              </div>
              
              <div className="space-y-4 text-slate-300">
                <p>
                  <strong>Confecciones y Uniformes PRE</strong> (en lo sucesivo <strong>Uniformes PRE</strong>) con domicilio en Av. López Portillo, Dentro del Mega Soriana de la López Portillo, Local 7, Cancún, Quintana Roo, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:
                </p>

                <h4 className="text-white font-bold text-base mt-6">¿Para qué fines utilizaremos sus datos personales?</h4>
                <p>
                  Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-4 text-slate-300">
                  <li>Respuesta a mensajes del formulario de contacto</li>
                  <li>Prestación de cualquier servicio solicitado.</li>
                  <li>Compra de algún producto</li>
                </ul>

                <h4 className="text-white font-bold text-base mt-6">¿Qué datos personales utilizaremos para estos fines?</h4>
                <p>
                  Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-4 text-slate-300">
                  <li>Datos de identificación y contacto</li>
                  <li>Datos laborales</li>
                </ul>

                <h4 className="text-white font-bold text-base mt-6">¿Con quién compartimos su información personal y para qué fines?</h4>
                <p>
                  Le informamos que sus datos personales no son compartidos fuera del país, a excepción de los compartidos con empresas que nos brindan servicios relacionados con tecnología.
                </p>
                <p className="pl-4 border-l-2 border-orange-500 italic text-slate-400">
                  Dentro del país:<br />
                  Uniformes PRE para prospección de clientes.
                </p>

                <h4 className="text-white font-bold text-base mt-6">¿Cómo puede acceder, rectificar o cancelar sus datos personales, u oponerse a su uso o ejercer la revocación de consentimiento?</h4>
                <p>
                  Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.
                </p>
                <p>
                  Para el ejercicio de cualquiera de los derechos ARCO, debe enviar una petición vía correo electrónico a <a href="mailto:puntodeventa@uniformespre.com" className="text-orange-400 hover:underline">puntodeventa@uniformespre.com</a> y deberá contener:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-4 text-slate-300">
                  <li>Nombre completo del titular.</li>
                  <li>Domicilio.</li>
                  <li>Teléfono.</li>
                  <li>Correo electrónico usado en este sitio web.</li>
                  <li>Copia de una identificación oficial adjunta.</li>
                  <li>Asunto «Derechos ARCO»</li>
                  <li>
                    Descripción el objeto del escrito, los cuales pueden ser de manera enunciativa más no limitativa los siguientes: Revocación del consentimiento para tratar sus datos personales; y/o Notificación del uso indebido del tratamiento de sus datos personales; y/o Ejercitar sus Derechos ARCO, con una descripción clara y precisa de los datos a Acceder, Rectificar, Cancelar o bien, Oponerse. En caso de Rectificación de datos personales, deberá indicar la modificación exacta y anexar la documentación soporte; es importante en caso de revocación del consentimiento, que tenga en cuenta que no en todos los casos podremos atender su solicitud o concluir el uso de forma inmediata, ya que es posible que por alguna obligación legal requiramos seguir tratando sus datos personales. Asimismo, usted deberá considerar que para ciertos fines, la revocación de su consentimiento implicará que no le podamos seguir prestando el servicio que nos solicitó, o la conclusión de su relación con nosotros.
                  </li>
                </ul>

                <h4 className="text-white font-bold text-base mt-6">¿En cuántos días le daremos respuesta a su solicitud?</h4>
                <p>15 días hábiles</p>

                <h4 className="text-white font-bold text-base mt-6">¿Por qué medio le comunicaremos la respuesta a su solicitud?</h4>
                <p>Al mismo correo electrónico de donde se envió la petición.</p>

                <h4 className="text-white font-bold text-base mt-6">El uso de tecnologías de rastreo en nuestro portal de internet</h4>
                <p>
                  Le informamos que en nuestra página de internet utilizamos cookies, web beacons u otras tecnologías, a través de las cuales es posible monitorear su comportamiento como usuario de internet, así como brindarle un mejor servicio y experiencia al navegar en nuestra página. Los datos personales que obtenemos de estas tecnologías de rastreo son los siguientes:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-4 text-slate-300">
                  <li>Identificadores, nombre de usuario y contraseñas de sesión</li>
                  <li>Idioma preferido por el usuario</li>
                  <li>Región en la que se encuentra el usuario</li>
                  <li>Tipo de navegador del usuario</li>
                  <li>Tipo de sistema operativo del usuario</li>
                  <li>Páginas web visitadas por un usuario</li>
                  <li>Búsquedas realizadas por un usuario</li>
                  <li>Publicidad revisada por un usuario</li>
                  <li>Listas y hábitos de consumo en páginas de compras</li>
                </ul>
                <p>
                  Estas cookies, web beacons y otras tecnologías pueden ser deshabilitadas. Para conocer cómo hacerlo, consulte el menú de ayuda de su navegador. Tenga en cuenta que, en caso de desactivar las cookies, es posible que no pueda acceder a ciertas funciones personalizadas en nuestro Sitio Web.
                </p>

                <h4 className="text-white font-bold text-base mt-6">¿Cómo puede conocer los cambios en este Aviso de Privacidad?</h4>
                <p>
                  El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas. Nos comprometemos a mantener actualizado este aviso de privacidad sobre los cambios que pueda sufrir y siempre podrá consultar las actualizaciones que existan en el sitio web <a href="https://uniformespre.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">uniformespre.com</a>.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-white border-b border-slate-800 pb-3">
                <Scale className="h-6 w-6 text-orange-500" />
                <h3 className="font-display text-xl tracking-wide font-bold">TÉRMINOS Y CONDICIONES DE COMPRA</h3>
              </div>

              <div className="space-y-4 text-slate-300">
                <h4 className="text-white font-bold text-base mt-4">1. INFORMACIÓN GENERAL</h4>
                <p>
                  Este sitio web es operado por Confecciones y Uniformes PRE. En todo el sitio, los términos «nosotros», «nos» y «nuestro» se refieren a Uniformes PRE.
                </p>
                <ul className="list-none space-y-1 text-slate-300 pl-2 border-l border-slate-800">
                  <li><strong>Sitio web:</strong> <a href="https://uniformespre.com/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">https://uniformespre.com/</a></li>
                  <li><strong>Email de contacto:</strong> <a href="mailto:puntodeventa@uniformespre.com" className="text-orange-400 hover:underline">puntodeventa@uniformespre.com</a></li>
                  <li><strong>Dirección:</strong> Av. López Portillo, Dentro del Mega Soriana de la López Portillo, Local 7, Cancún, Quintana Roo.</li>
                </ul>

                <h4 className="text-white font-bold text-base mt-6">2. PRODUCTOS Y SERVICIOS</h4>
                <p>
                  Nos esforzamos por mostrar con la mayor precisión los colores e imágenes de nuestros productos que aparecen en la tienda. No podemos garantizar que la visualización de cualquier color en su monitor sea exacta.
                </p>
                <p className="font-semibold text-orange-400">
                  Los pantalones se entregan sin dobladillo.
                </p>
                
                <h5 className="text-white font-semibold text-sm mt-4">Proceso de compra:</h5>
                <ul className="list-disc list-inside space-y-2 pl-4 text-slate-300">
                  <li>La vigencia de la cotización enviada es de 15 días hábiles para pedidos al mayoreo.</li>
                  <li>Se requiere el 50% del total de la compra como anticipo y el pago del otro 50% previo al envío.</li>
                  <li>
                    El tiempo de entrega comenzará a correr una vez que se haya recibido:
                    <ul className="list-circle list-inside pl-6 mt-1 space-y-1 text-slate-400">
                      <li>Orden de compra</li>
                      <li>Cotización con firma de autorización o anticipo.</li>
                      <li>Requisición de pedido con la información completa (tallas, cantidades, descripción, tela, bordado, serigrafía, sublimado)</li>
                      <li>Boceto revisado y autorizado por el cliente, según sea el caso.</li>
                    </ul>
                  </li>
                </ul>

                <h4 className="text-white font-bold text-base mt-6">3. PRECIOS Y PAGOS</h4>
                <p>
                  Todos los precios están sujetos a cambios sin previo aviso. Los precios mostrados incluyen IVA cuando corresponda y en cuanto a la tienda online, el envío se calcula una vez que ingresa la dirección (para envíos nacionales).
                </p>

                <h4 className="text-white font-bold text-base mt-6">4. ENVÍOS</h4>
                <p>
                  El tiempo estimado de envío es de 45-60 días hábiles para prendas personalizadas. Los tiempos de entrega son estimados y no podemos garantizar entregas en fechas específicas.
                </p>

                <h4 className="text-white font-bold text-base mt-6">5. POLÍTICA DE DEVOLUCIONES</h4>
                <p>
                  <strong>GARANTÍA:</strong> Aceptamos devoluciones únicamente por defecto de fábrica y dentro de los 10 días naturales posteriores a la recepción del producto.
                </p>

                <h5 className="text-white font-semibold text-sm mt-4">5.1 PROCEDIMIENTO DE DEVOLUCIÓN</h5>
                <ol className="list-decimal list-inside space-y-3 pl-4 text-slate-300">
                  <li>
                    <strong className="text-white">Devolución del dinero (solo aplica para casos de garantía):</strong>
                    <ul className="list-disc list-inside pl-6 mt-1 space-y-1 text-slate-400">
                      <li>A través de transferencia (cuenta de ahorros, cuenta corriente): se realiza aproximadamente dentro de los cinco días hábiles siguientes de recibir el producto nuevamente en nuestra bodega.</li>
                      <li>A través de reversión del pago: quince días hábiles después de recibir el producto en nuestra bodega. Ésta reversión corre por cuenta y orden de tu entidad bancaria, cualquier duda debes comunicarte directamente con ellos.</li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-white">Cambio del producto (Sujeto a disponibilidad de inventario en el momento del cambio):</strong> Sólo se podrán realizar cambios por productos con valor igual o inferior al original y la diferencia en caso de aplicar, se entregará en un cupón para una nueva compra en la tienda online. En caso de no contar con disponibilidad para el cambio, se entregará el valor del producto(s) en una nota de crédito para una nueva compra.
                  </li>
                  <li>
                    <strong className="text-white">Nota de crédito para realizar una nueva compra:</strong> Este cupón tiene validez por seis meses a partir de la fecha de creación.
                  </li>
                </ol>

                <h5 className="text-white font-semibold text-sm mt-4">5.2 CONDICIONES DEL PRODUCTO PARA DEVOLUCIÓN</h5>
                <p>
                  El producto deberá devolverse en óptimas condiciones, sin rastros de haber sido utilizado, con las etiquetas originales o en su defecto, si ya fueron retiradas, debes introducirlas en el empaque. Una vez recibido el producto en nuestra bodega, verificaremos las condiciones del mismo y de acuerdo con los resultados, se te enviará un producto nuevo o se te entregará una nota de crédito para una nueva compra.
                </p>

                <h4 className="text-white font-bold text-base mt-6">6. PRIVACIDAD Y PROTECCIÓN DE DATOS</h4>
                <p>
                  Nos comprometemos a proteger su privacidad. La información personal que nos proporcione se utilizará únicamente para procesar su pedido y mejorar su experiencia de compra.
                </p>

                <h4 className="text-white font-bold text-base mt-6">7. MODIFICACIONES DE LOS TÉRMINOS</h4>
                <p>
                  Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.
                </p>

                <p className="text-xs text-slate-500 mt-8 pt-4 border-t border-slate-800">
                  Última actualización: 22/7/2025
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="bg-slate-950 border-t border-slate-800 p-4 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-lg transition-colors text-xs uppercase tracking-wider cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
