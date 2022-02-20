import * as preact from 'preact';
import * as hangul from './hangul';

type Syllable = {
	code: number;
	char: string;
	strokeCount: number;
};

const SORT_CODE = 0;
const SORT_STROKE_COUNT = 1;
const SORT_RANDOM = 2;

const sortNames = ['Code', 'Stroke Count', 'Random'];

type State = {
	sortBy: number;
	ascending: boolean;
	syllables: Syllable[];
};

class Page extends preact.Component<{}, State> {
	constructor() {
		super();

		const syllables: Syllable[] = [];

		for (let i = 0xac00; i <= 0xd7a3; ++i) {
			syllables.push({
				code: i,
				char: String.fromCharCode(i),
				strokeCount: hangul.strokeCount(hangul.decompose(i)),
			});
		}

		this.state = { sortBy: SORT_CODE, ascending: true, syllables };
	}

	sortList(sortBy: number, ascending: boolean, list: Syllable[]) {
		const ascender = ascending ? 1 : -1;

		switch (sortBy) {
			case SORT_CODE:
				list.sort((a, b) => (a.code - b.code) * ascender);
				break;
			case SORT_STROKE_COUNT:
				list.sort((a, b) => (a.strokeCount - b.strokeCount) * ascender);
				break;
			case SORT_RANDOM:
				list.sort(() => 0.5 - Math.random());
				break;
		}

		return {
			sortBy: sortBy,
			ascending: ascending,
			syllables: list,
		};
	}

	render() {
		return (
			<>
				<div id="controls-holder">
					<p>Sort by: </p>
					<select
						onChange={event => {
							this.setState(
								this.sortList(
									+event.currentTarget.value,
									this.state.ascending,
									this.state.syllables,
								),
							);
						}}
					>
						{[SORT_CODE, SORT_STROKE_COUNT, SORT_RANDOM].map(
							sortCode => (
								<option
									selected={this.state.sortBy === sortCode}
									value={sortCode}
								>
									{sortNames[sortCode]}
								</option>
							),
						)}
					</select>
					<select
						onChange={event => {
							this.setState(
								this.sortList(
									this.state.sortBy,
									event.currentTarget.value === 'ascending',
									this.state.syllables,
								),
							);
						}}
					>
						<option
							selected={this.state.ascending}
							value="ascending"
						>
							Ascending
						</option>
						<option
							selected={!this.state.ascending}
							value="descending"
						>
							Descending
						</option>
					</select>
				</div>
				<div id="syllable-holder">
					{this.state.syllables.map(({ code, char, strokeCount }) => (
						<div class="syllable-block">
							<p class="code">
								{'U+' + code.toString(16).toUpperCase()}
							</p>
							<p class="char">{char}</p>
							<p class="stroke-count">{strokeCount}</p>
						</div>
					))}
				</div>
			</>
		);
	}
}

preact.render(<Page />, document.body);
