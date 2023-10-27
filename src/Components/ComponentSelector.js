import React from 'react';
import DraggableText from './DraggableText';
import DraggableGiphy from './DraggableGiphy';
import DraggableButton from './DraggableButton';
import DraggableHtml from './DraggableHtml';
import DraggableCrypto from './DraggableCrypto';
import DraggableMedia from './DraggableMedia';
import DraggableShape from './DraggleShapes';

function ComponentSelector({ elem, selected })  {
    // Verifica si el elemento está seleccionado
    const isSelected = selected && selected.includes(elem.id);

    // Renderiza componentes según el tipo del elemento
    switch (elem.type) {
        case 'text':
            return (
                <DraggableText
                    elemData={elem}
                    selected={isSelected}
                />
            );
        case 'button':
            return (
                <DraggableButton
                    elemData={elem}
                    selected={isSelected}
                />
            );
        case 'shapes':
            return (
                <DraggableShape
                    elemData={elem}
                    selected={isSelected}
                />
            );
        case 'media':
            return (
                <DraggableMedia
                    elemData={elem}
                    selected={isSelected}
                />
            );
        case 'crypto':
            return (
                <DraggableCrypto
                    elemData={elem}
                    selected={isSelected}
                />
            );
        case 'giphy':
            return (
                <DraggableGiphy
                    elemData={elem}
                    selected={isSelected}
                />
            );
        case 'markdown':
        case 'code':
            return (
                <DraggableHtml
                    elemData={elem}
                    selected={isSelected}
                />
            );
        default:
            return <></>;
    }
}

export default ComponentSelector;
