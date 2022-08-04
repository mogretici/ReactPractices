import {screen, render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToDo from "./index";


describe ("ToDo Test", () => {
    let button, input;

    test('varsayılan itemların listelenmesi', ()=>{
        render(<ToDo />);
        button = screen.getByText('Add');
        input = screen.getByPlaceholderText('What do you want to do?');
        const items= screen.getAllByText(/Item/i);
        expect(items.length).toEqual(3);  
    })

    test ('input ve buton dökümanda bulunmalı',()=>{
        render(<ToDo />);
        button = screen.getByText('Add');
        input = screen.getByPlaceholderText('What do you want to do?');
        expect(input).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    })
    test ('inputa string girilip butona basılınca listeye eklenmesi',()=>{
        render(<ToDo />);
        button = screen.getByText('Add');
        input = screen.getByPlaceholderText('What do you want to do?');
        //inputu doldur
        const name='Lütfü';
        userEvent.type(input,name);
        //butona tıkla
        userEvent.click(button);
        //assertion
        expect(screen.getByText(name)).toBeInTheDocument();
    })

});
