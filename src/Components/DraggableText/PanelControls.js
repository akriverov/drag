import React, { useState } from 'react';
import ColorPicker from '../../utils/ui/ColorPicker';
import DropDownMenu from '../../utils/ui/DropDownMenu';

const fontList = ['Arial', 'Times New Roman', 'Courier New'];

export default function PanelControls({
    onLocalUpdate,
    elemData,
    setPanelControls,
}) {
    const [colorPickerActive, setColorPickerActive] = useState(false);

    // Función para abrir el selector de colores
    const openColorPicker = () => {
        setPanelControls(
            <div>
                <ColorPicker
                    color={
                        elemData.style && elemData.style.color || 'black'
                    }
                    onChange={(color) => {
                        onLocalUpdate({
                            style: { ...elemData.style, color: color },
                        });
                    }}
                    onClose={() => {
                        setColorPickerActive(false);
                    }}
                />
            </div>
        );
        setColorPickerActive(true);
    };

    // Lista de direcciones de alineación de texto
    const alignDirections = ['left', 'center', 'right'];

    // Íconos correspondientes a las direcciones de alineación
    const alignIcon = ['align-left', 'align-center', 'align-right'];

    // Índice de la dirección de alineación actual
    let currentDirection = alignDirections.indexOf(
        elemData.style && elemData.style.textAlign
    );

    // Si no se encuentra la dirección de alineación, usar alineación central por defecto
    currentDirection = currentDirection < 0 ? 1 : currentDirection;

    return (
        <>
            {/* Selector de color de texto */}
            <div
                onClick={openColorPicker}
                style={{
                    borderRadius: 100,
                    width: 25,
                    height: 25,
                    backgroundColor: elemData.style && elemData.style.color,
                    border: '2px solid black',
                    cursor: 'pointer',
                }}
            ></div>

            {/* Selector de fuente */}
            <DropDownMenu
                key={elemData.id + '-font'}
                options={fontList}
                selectedOption={elemData.style && elemData.style.fontFamily}
                onSelect={(font) => {
                    onLocalUpdate({ style: { fontFamily: font } });
                }}
                type={'font'}
            />

            <div style={{ padding: 2 }} />

            {/* Selector de tamaño de fuente */}
            <DropDownMenu
                options={[14, 18, 20, 24, 30, 36, 48, 72, 90]}
                selectedOption={
                    elemData.style &&
                    elemData.style.fontSize &&
                    elemData.style.fontSize.replace(/[^0-9]/g, '')
                }
                onSelect={(selectedValue) => {
                    onLocalUpdate({
                        style: { fontSize: selectedValue + 'px' },
                    });
                }}
            />

            <div style={{ padding: 5 }} />

            {/* Botón para negrita (bold) */}
            <div
                className={`cbutton cbuttoninner ${
                    elemData.style && elemData.style.fontWeight === 'bold'
                        ? 'cbuttoninner-selected'
                        : ''
                }`}
            >
                <i
                    className={`fas fa-bold`}
                    onClick={() => {
                        // Alternar entre negrita y normal
                        elemData.style && elemData.style.fontWeight === 'bold'
                            ? onLocalUpdate({ style: { fontWeight: 'normal' } })
                            : onLocalUpdate({ style: { fontWeight: 'bold' } });
                    }}
                />
            </div>

            <div style={{ padding: 5 }} />

            {/* Botón para cursiva (italic) */}
            <div
                className={`cbutton cbuttoninner ${
                    elemData.style && elemData.style.fontStyle === 'italic'
                        ? 'cbuttoninner-selected'
                        : ''
                }`}
            >
                <i
                    className={`fas fa-italic`}
                    onClick={() => {
                        // Alternar entre cursiva y normal
                        elemData.style && elemData.style.fontStyle === 'italic'
                            ? onLocalUpdate({ style: { fontStyle: 'normal' } })
                            : onLocalUpdate({ style: { fontStyle: 'italic' } });
                    }}
                />
            </div>

            <div style={{ padding: 5 }} />

            {/* Botón para alineación de texto */}
            <div className={`cbutton cbuttoninner`}>
                <i
                    className={`fas fa-${alignIcon[currentDirection]}`}
                    onClick={() => {
                        // Cambiar la dirección de alineación (izquierda, centro, derecha)
                        onLocalUpdate({
                            style: {
                                textAlign: alignDirections[
                                    (currentDirection + 1) % alignDirections.length
                                ],
                            },
                        });
                    }}
                />
            </div>

            <div style={{ padding: 2 }} />
        </>
    );
}
