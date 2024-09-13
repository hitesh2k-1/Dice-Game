
const TotalScore = ({score}) => {
  return (
    <div className="items-center flex flex-col max-w-40">
      <h1 className="text-8xl font-bold" >{score}</h1>
      <p className="sm:text-2xl text-lg font-bold" >Total Score</p>
    </div>
  )
}

export default TotalScore
