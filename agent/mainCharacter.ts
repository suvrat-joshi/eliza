import {
    Character,
    Clients,
    defaultCharacter,
    ModelProviderName,
} from "@ai16z/eliza";

export const mainCharacter: Character = {
    ...defaultCharacter,
    clients: [Clients.TWITTER],
    modelProvider: ModelProviderName.GAIANET,
    name: "123",
};