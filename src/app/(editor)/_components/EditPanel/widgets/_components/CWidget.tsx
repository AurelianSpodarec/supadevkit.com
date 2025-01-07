
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
    <div className="mb-4">
      <h3 className="text-lg font-medium text-white/90 font-orbitron">
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
