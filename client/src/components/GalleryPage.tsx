const photos = [
    { id: 1, src: 'pic1.jpeg', alt: 'Photo 1' },
    { id: 2, src: 'pic2.jpeg', alt: 'Photo 2' },
    { id: 3, src: 'pic3.jpg', alt: 'Photo 3' },
    { id: 4, src: 'pic4.jpg', alt: 'Photo 4' },
    { id: 5, src: 'pic5.jpg', alt: 'Photo 5' },
    { id: 6, src: 'pic6.jpg', alt: 'Photo 6' },
    { id: 7, src: 'pic7.jpg', alt: 'Photo 7' },
    { id: 8, src: 'pic8.jpg', alt: 'Photo 8' },
]
function GalleryPage(){
    return (
      <div className="h-full w-full block bg-gray-800 p-6 overflow-x-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-fr gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <button className="w-[130px] h-[30px] font-kanit bg-green-500 rounded-3xl hover:w-[140px] hover:h-[35px] transition-all duration-[0.20]">Download</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default GalleryPage;