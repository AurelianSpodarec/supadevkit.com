
interface ICWidgetContainer {
  children: React.ReactNode;
  gutter?: "none" | "default"
}

export function CWidgetContainer({ children, gutter = "default" }: ICWidgetContainer) {

  const gutters = {
    none: "p-0",
    default: "p-4"
  }

  return (
    <div className={`border-b border-gray-700 ${gutters[gutter]}`}>
      {children}
    </div>
  );
}

interface ICWidgetHeader {
  name: string;
  gutter?: "none" | "default"
}

export function CWidgetHeader({ name, gutter = "none" }: ICWidgetHeader) {

  const gutters = {
    none: "p-0 mb-2 ",
    default: "p-4"
  }

  return (
    <div className={`${gutters[gutter]}`}>
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
