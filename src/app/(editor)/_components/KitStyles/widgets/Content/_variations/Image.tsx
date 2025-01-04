

function getLastPartOfUrl(url:any) {
  const parts = url.split('/');
  return parts[parts.length - 1];
}

function WidgetImage({ element }:any) {

  return (
    <div>
      <div className="flex">
        <img className="h-10 w-10 object-cover rounded-md" src={element.src} />
        <span className="text-sm truncate pl-2">
         {getLastPartOfUrl(element.src)}
        </span>
      </div>
      <button>
        {/* more options */}
      </button>
    </div>
  );
}

export default WidgetImage;
