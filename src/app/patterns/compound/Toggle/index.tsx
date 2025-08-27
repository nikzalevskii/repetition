import { useState } from "react";

interface Props {
  initialValue?: boolean;
}

export const Toggle = ({ initialValue = false }: Props) => {
  const [isOn, setIsOn] = useState(initialValue);

  return (
    <div className="flex gap-4 items-center mt-4">
      <button
        onClick={() => setIsOn(!isOn)}
        className="bg-blue-500 text-white p-2 rounded-md cursor-pointer font-bold "
      >
        Switch
      </button>
      {isOn && <span className="text-green-500 font-bold">On</span>}
      {!isOn && <span className="text-red-700 font-bold">Off</span>}
    </div>
  );
};

export const ToggleWithNewButton = ({ initialValue = false }: Props) => {
  const [isOn, setIsOn] = useState(initialValue);

  return (
    <div className="flex gap-4 items-center mt-4">
      <button
        onClick={() => setIsOn(!isOn)}
        className="bg-orange-500 text-white p-2 rounded-md cursor-pointer font-bold "
      >
        Switch
      </button>
      {isOn && <span className="text-green-500 font-bold">On</span>}
      {!isOn && <span className="text-red-700 font-bold">Off</span>}
    </div>
  );
};

const CompoundToggle = () => {};
