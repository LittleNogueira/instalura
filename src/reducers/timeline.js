export default function timeline(state=[],action){

    if(action.type === 'LISTAGEM'){
      return action.fotos;
    }

    if(action.type === 'COMENTARIO'){
        const fotoAchada = state.find(foto => foto.id === action.fotoId);        
        fotoAchada.comentarios.push(action.novoComentario);

        return state;
    }
  
    return state;
  
}