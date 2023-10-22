'use client';
import { ICustomButtonProps } from '@/types';
import Image from 'next/image';

const CustomButton = ({
    title,
    containerStyles,
    handleClick
}: ICustomButtonProps) => {
  return (
    <button
        disabled={false}
        type={'button'}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
  )
}

export default CustomButton