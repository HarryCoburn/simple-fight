import { Player } from './Player';

test("Player built with right constructor", () => {
    let newPlayer = new Player({name: "Rolo", hp: 1, attack: function(){ return 3 }});    
    expect(newPlayer.name).toBe("Rolo")
    expect(newPlayer.inventory).toStrictEqual({})
})