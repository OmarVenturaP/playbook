import Pokemon from './pokemon'

test('1) Create a new object pokemon', () => {
  const myPokemon = new Pokemon('Pikachu', 'electrick')
  expect(myPokemon.name).toBe('Pikachu'); // Corrige esta prueba
});