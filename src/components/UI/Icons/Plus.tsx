interface IPlusProps {
    width: number,
    height: number,
}

export const Plus = ({width, height}: IPlusProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.20068 1L7.20068 13M1 7.01648H13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
    );
};

