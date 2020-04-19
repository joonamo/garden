import * as React from 'react'
import moment from 'moment'
import { lastMonth, dyingMinimum } from './GardenViewModel'
import './styles/sass/howtoplay.scss'
import classNames from 'classnames'

const ExampleFlower = (props: { flower: number, noBorder?: boolean }) => (
  <div className={classNames('garden-tile', props.noBorder ? 'no-border' : null)}>
    <div className={`garden-tile-content flower-${props.flower}`} />
  </div>
)

export const HowToPlay = () => <div className="how-to-play">
  <h2 className="title is-2">How to Play</h2>
  <div className="columns is-mobile">
    <div className="column is-two-fifths">
      <div className="example-garden">
        <div className="garden-row">
          <div className="garden-tile" />
          <ExampleFlower flower={1} />
          <ExampleFlower flower={1} />
        </div>
        <div className="garden-row">
          <ExampleFlower flower={1} />
          <ExampleFlower flower={2} />
          <ExampleFlower flower={1} />
        </div>
        <div className="garden-row">
          <ExampleFlower flower={3} />
          <ExampleFlower flower={1} />
          <ExampleFlower flower={1} />
        </div>
        <div className="garden-row">
          <ExampleFlower flower={3} />
          <ExampleFlower flower={3} />
          <div className="garden-tile" />
        </div>
      </div>
    </div>
    <div className="column has-background-light is-three-fiths">
      <p className="example-number">1</p>
      <p>
        Plant flowers in your garden. Hit <em>Ready!</em> when done and your flowers
        will start flourishing or perishing according to rules of{' '}
        <a 
          href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
          target="_blank"
          rel="noopener noreferrer"
        >
            Game of Life
        </a>. See how different patterns evolve!
      </p>
    </div>
  </div>

  <div className="columns is-mobile">
    <div className="column has-background-light is-three-fiths">
      <p className="example-number">2</p>
      <p>
        You get scored every day by number or different flowers in your garden.
        If {dyingMinimum} or more flowers wither in one day, you&#39;ll get seeds!
      </p>
    </div>
    <div className="column has-background-success is-two-fifths scoring-example">
      <div className="scoring-example huge-text">
        <div className="garden-row">
          <ExampleFlower flower={1} noBorder={true}/>
        </div>
        <div className="garden-row">
          <p>&times;</p>
        </div>
        <div className="garden-row">
          <ExampleFlower flower={2} noBorder={true}/>
        </div>
        <div className="garden-row">
          <p>&times;</p>
        </div>
        <div className="garden-row">
          <ExampleFlower flower={3} noBorder={true}/>
        </div>
      </div>
      <p>= Score</p>
    </div>
  </div>

  <div className="columns is-mobile">
    <div className="column is-two-fifths">
      <div className="final-guide">
        <div className="garden-row">
          <ExampleFlower flower={3} noBorder={true} />
        </div>
        <div className="garden-row">
          <div className="garden-tile no-border">
            <div className="garden-tile-content shovel" />
          </div>
        </div>
      </div>
    </div>
    <div className="column has-background-light is-three-fiths">
      <p className="example-number">3</p>
      <p>
        You have a chance to add more flowers in your garden once every month.
        The game ends in {moment(`2020-${lastMonth.padStart(2, '0')}-01`).format('MMMM')}.
        Good luck!
      </p>
    </div>
  </div>
</div>