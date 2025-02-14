# Solar System App

Una aplicación web interactiva que muestra información sobre los planetas del sistema solar. La aplicación permite a los usuarios buscar, ordenar y marcar planetas como favoritos, utilizando datos proporcionados por una API REST pública.

## Características

- **Listado de Planetas**:
  - Visualiza los planetas del sistema solar en un formato de tarjetas.
  - Realiza búsquedas por nombre.
  - Ordena los planetas alfabéticamente (A-Z o Z-A).
  - Paginación con un máximo de 5 planetas por página.

- **Detalles de los Planetas**:
  - Visualiza información detallada de cada planeta, como su nombre, masa, distancia al sol y número de lunas.
  - Marca planetas como favoritos para guardarlos localmente.

- **Otras Características**:
  - **Responsividad**: Funciona correctamente en dispositivos móviles y de escritorio.
  - **Scroll Personalizado**: Diseñado para ofrecer una experiencia de scroll fluida y estética.
  - **Manejo de Estado**: Implementación con `Zustand` para la gestión de favoritos.
  - **Persistencia**: Los favoritos se almacenan en el localStorage.

## Tecnologías Utilizadas

- **Framework**: [Next.js](https://nextjs.org/)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Estado**: Zustand
- **Fetching de Datos**: React Query
- **Iconos**: Lucide React

## Instalación

Sigue estos pasos para instalar y ejecutar la aplicación localmente:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/Eliana-Janneth/solar-system.git
2. Entra en el directorio del proyecto:
   ```bash
   cd solar-system-app
3. Instala las dependencias:
   ```bash
   npm install
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
