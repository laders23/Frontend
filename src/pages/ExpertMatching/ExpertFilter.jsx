
import './ExpertFilter.css';

const ExpertFilter = () => {
  return (
    <div className="expert-filter">
      <h3>Filter Experts</h3>
      <form>
        <label>
          Profession:
          <select name="profession">
            <option value="all">All</option>
            <option value="electrician">Electrician</option>
            <option value="plumber">Plumber</option>
            {/* 추가 필터 옵션 */}
          </select>
        </label>
        <label>
          Rating:
          <select name="rating">
            <option value="all">All</option>
            <option value="4">4 stars & up</option>
            <option value="3">3 stars & up</option>
            {/* 추가 필터 옵션 */}
          </select>
        </label>
        <button type="submit">Apply Filters</button>
      </form>
    </div>
  );
};

export default ExpertFilter;
