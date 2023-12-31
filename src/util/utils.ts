export function convertFromGameTime(gameTime: string) : number
{
    const time = gameTime.split(":");
    const minutesInSeconds = parseInt(time[0]) * 60;
    return minutesInSeconds + parseInt(time[1]);
}

export function convertToGameTime(gameTime: number) : string
{
    const minutes = Math.floor(gameTime / 60);
    const seconds = gameTime % 60;
    return (((minutes - (minutes % 10)) / 10 != 0) ? minutes : "0" + minutes) + ":" + (((seconds - (seconds % 10)) / 10 != 0) ? seconds : "0" + seconds);
}