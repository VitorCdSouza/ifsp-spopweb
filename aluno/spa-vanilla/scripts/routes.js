import { exibirInicio, exibirSobre, exibirContato, exibirTODO, exibirPosts, exibirFotos } from "./handlers";

export const rotas = {
    '#': exibirInicio,
    '#sobre': exibirSobre,
    '#contato': exibirContato,
    '#todo': exibirTODO,
    '#posts': exibirPosts,
    '#fotos': exibirFotos,
};