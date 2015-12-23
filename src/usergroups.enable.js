
// this file was generated by ./scripts/generate-web-api
import exec from './_exec'
import validate from './_validate'

export default function usergroupsenable(params, callback) {
  let ns = 'usergroups.enable'
  let err = validate(ns, params)
  if (err) {
    callback(err)
  }
  else {
    exec(ns, params, callback)
  }
}
