/*
 * Let's add a button component.
 *
 * A simple button version which we can
 * converte to another button version in
 * our app
 *
 * Don't forget to import 'styled-components/macro'!
 */

import AppHeader from './AppHeader'
import Button from './Button'

export default function App() {
  return (
    <div>
      <AppHeader title={'Hi Hacker!'} subtitle={"How's it going?"} />
      <Button>Not styled</Button>
      <Button primary>Not styled</Button>
      <Button color>Not styled</Button>
    </div>
  )
}
