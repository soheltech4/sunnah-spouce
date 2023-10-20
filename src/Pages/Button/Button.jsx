import React from 'react';

const Button = ({title, link}) => {
    return (
        <div>
            <a href="#_" class="relative inline-flex items-center px-3 py-2 overflow-hidden text-lg font-medium text-purple-600 border-2 border-purple-600 rounded-full hover:text-white group hover:bg-gray-50">
                <span class="absolute left-0 block w-full h-0 transition-all bg-purple-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                </span>
                <span class="relative text-xs">{title}</span>
            </a>
        </div>
    );
};

export default Button;