
interface ICWidgetContainer {
  children: React.ReactNode;
}

export function CWidgetContainer({ children }: ICWidgetContainer) {
  return (
    <div className="border-b border-gray-700 p-4">
      {children}
    </div>
  );
}

interface ICWidgetHeader {
  name: string;
}

export function CWidgetHeader({ name }: ICWidgetHeader) {
  return (
    <div className="mb-2">
      <h3 className="text-sm font-medium text-white/90 font-geistMono">
        {name}
      </h3>
    </div>
  );
}

interface ICWidgetContent {
  children: React.ReactNode;
}

export function CWidgetContent({ children }: ICWidgetContent) {
  return (
    <div>
      {children}
    </div>
  );
}
