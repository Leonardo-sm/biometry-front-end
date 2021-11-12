const { promisify } = window.require('util')
const electron = window.require('electron').remote

const appPath = electron.app.getAppPath()

const exec = promisify(window.require('child_process').exec)

const COMMAND_BASE = `python ${appPath}/fingerprint/fingerprint_match.py`

async function runBiometryCompare(params: string[]) {
  const result = await exec(`${COMMAND_BASE} ${params[0]} ${params[1]}`)
  const formatResult = result.stdout.trim().toLowerCase() === 'true'

  return formatResult
}

export default runBiometryCompare
