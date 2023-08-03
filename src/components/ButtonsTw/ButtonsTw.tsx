import { ButtonsTwProps } from './models/ButtonsTwProps';

export const ButtonsTw = ({label}: ButtonsTwProps) => {

    return (
      <>
         <button className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-green-500 text-lg font-bold text-white">
            {label}
            <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </>
    );
};