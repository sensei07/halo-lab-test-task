interface IPlusProps {
    width: number,
    height: number,
}

export const Minus = ({width, height}: IPlusProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M0 1.00012C0 0.447837 0.348223 0.00012207 0.777778 0.00012207L13.2222 0.00012207C13.6518 0.00012207 14 0.447837 14 1.00012C14 1.55241 13.6518 2.00012 13.2222 2.00012L0.777778 2.00012C0.348223 2.00012 0 1.55241 0 1.00012Z"
                  fill="white"/>
        </svg>

    );
};

