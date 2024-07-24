const students = [
  {
    name: "Luiz",
    firstNote: 6,
    secondNote: 6
  },
  {
    name: "Bia",
    firstNote: 9,
    secondNote: 6
  },
  {
    name: "Carlos",
    firstNote: 3,
    secondNote: 9
  },
]

function average(firstNote, secondNote) {
  return ((firstNote + secondNote) / 2).toFixed(2);
}


for (let student of students) {
  const avg = average(student.firstNote, student.secondNote);
    if (avg >= 7) {
    alert(`
      A média do aluno(a) ${student.name} é: ${avg}
      Parabéns, ${student.name}! Você foi aprovado(a) no concurso.
    `);
  } else {
    alert(`
      A média do aluno(a) ${student.name} é: ${avg}
      Não foi dessa vez, ${student.name}! Tente novamente.
    `);
  }

}
