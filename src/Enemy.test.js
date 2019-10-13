import { Enemy } from './Enemy';

test("Enemy built with right constructor", () => {
    let newEnemy = new Enemy({name: "slime", hp: 1, attack: function(){ return 3 }});
    expect(newEnemy.constructor.name).toBe("Enemy")
    expect(newEnemy.name).toBe("slime")
})