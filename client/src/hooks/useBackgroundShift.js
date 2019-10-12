import { useEffect, useState } from 'react';

const useBackgroundShift = (initialValue) => {
    
    const [background, setBackground] = useState(initialValue);

    useEffect(() => {
        if(background){
            document.body.classList.add('background-shift');
        } else {
            document.body.classList.remove('background-shift');
        }
    }, [background]);

    return [background, setBackground]
}

export default useBackgroundShift;