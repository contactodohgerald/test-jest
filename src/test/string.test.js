

test('check for string', () => {
    const greetings = "good evening Hope!, hope you are doing okay"

    expect(greetings).toMatch(/good/)
    expect(greetings).toMatch(/hope/)
    
})