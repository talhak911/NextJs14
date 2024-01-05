


export default function Grid() {
    return (
      <div className="p-3 bg-slate-500 gap-1">
        <div className="grid grid-cols-3">
          {/* First Element (2 columns, 2 rows) */}
          <div className="col-span-2  border h-32 w-64">
            {/* Replace the text with your image */}
            <img src="your-image-url" alt="Image 1" className="h-full w-full object-cover" />
          </div>
          {/* Second Element (1 column, 2 rows) */}
          <div className="row-span-2 border h-32 w-32">
            {/* Replace the text with your image */}
            <img src="your-image-url" alt="Image 2" className="h-full w-full object-cover" />
          </div>
          {/* Third Element (1 column, 2 rows) */}
          <div className="row-span-2 border h-32 w-32">
            {/* Replace the text with your image */}
            <img src="your-image-url" alt="Image 3" className="h-full w-full object-cover" />
          </div>
          {/* Fourth Element (Centered) */}
          <div className="col-span-3 flex items-center justify-center border h-32 w-96">
            {/* Replace the text with your image */}
            <img src="your-image-url" alt="Image 4" className="h-full w-full object-cover" />
          </div>
          {/* Fifth Element (2 columns) */}
          <div className="col-span-2 border h-32 w-64">
            {/* Replace the text with your image */}
            <img src="your-image-url" alt="Image 5" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    );
  };
  


